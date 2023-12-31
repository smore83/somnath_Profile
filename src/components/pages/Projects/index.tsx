import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  IconButtonProps,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import LandingPageTemplate from "../../templates/Layout";
import TextField from "../../atoms/textfield";
import { SEARCH_TEXT } from "../../../utils/constant";
import { myProjects } from "../../../utils/api";
import Typography from "../../atoms/typograpy";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  ProjectImage   from "../../../icons/Project.png";

export interface MyProject {
  id: number;
  title: string;
  description: string;
  tools: string;
  link: string;
  published: string;
}

const ProjectListContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height:'auto',
  width: "100%",
  // paddingTop: "0.9375rem",
   background:'linear-gradient(120deg, #FF758C, #FF7EB3, #A7C0FD, #6D5BBA)',
});

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}


const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: "none"
}));

const StyledBox=styled(Box)({
   display:'flex' ,
   flexWrap: 'wrap',
  justifyContent: 'space-between',
   margin:'10px', 
   padding: '1rem',
   gap:'1.625rem',
   marginRight:'10px',
    '@media (max-width: 768px)': {
      flexDirection:'column',
      gap:'0.625rem',
      width: '100%',
     
      alignItems: 'center', 
       transform: 'none',
    },
})
const Projects = () => {
  const [searchData,setSearchData]=useState("");
  const [expanded, setExpanded] = useState(-1);
  const [favorite ,setFavorite]=useState<number[]>([]);

  const handleExpandClick = (index:number) => {
    setExpanded(expanded === index ? -1 : index);
  };

  const handleFavoriteClick = (id: number) => {
    console.log(id);
    if (favorite.includes(id)) {
     
      setFavorite(favorite.filter((favId) => favId !== id));
    } else {
      setFavorite([...favorite, id]);
    }
  };

  const PaperBox={
    display:'flex',
    boxShadow: '8px 16px 16px rgba(0, 0, 0, 0.1)', 
    borderRadius: '7px',
    padding: '0.5rem 1rem',
    width:'auto'

  }
  const isFavorite = (id: number) => favorite.includes(id);

  return (
    <ProjectListContainer>
  
       <TextField
        placeholder={SEARCH_TEXT}
        onChange={(e) => setSearchData(e.target.value)}
        style={PaperBox}
     />
      <StyledBox>
        {myProjects
          .filter(
            (project) =>
              project.title.toLowerCase().includes(searchData) ||
              project.tools.toLowerCase().includes(searchData)
          )
          .map((data, index) => (
            <Card key={data.id} sx={{ width: '100%', maxWidth: 345, margin: '1rem 0' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="project">
                    {data.title.charAt(0)}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={data.title}
                subheader={data.published}
              />
              <CardMedia
                component="img"
                height="194"
                image={ProjectImage} 
                alt={data.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <IconButton
                  aria-label="add to favorites"
                  onClick={() => handleFavoriteClick(data.id)}
                >
                  <FavoriteIcon color={isFavorite(data.id) ? 'error' : 'inherit'} />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  aria-expanded={expanded === index}
                  onClick={() => handleExpandClick(index)}
                  aria-label="show more"
                >
                  <ExpandMoreIcon
                    style={{
                      transform: expanded === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </IconButton>
              </CardActions>
              {expanded === index && (
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {
                      data.description
                    }
                  </Typography>
                </CardContent>
              )}
            </Card>
          ))}
      </StyledBox>
    </ProjectListContainer>
  );
};


const ProjectPage = () => {
  return (
   <LandingPageTemplate content={<Projects/>}/>
  )
}

export default ProjectPage
