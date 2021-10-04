import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import "./Post.css";

const Post = (props) => {
  const { title, body } = props.post;
  return (
    <div>
      <Card>
        <CardActionArea
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
            height: 220,
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body}
            </Typography>
          </CardContent>
          <Button className="btn-regular" variant="contained">
            Read More
          </Button>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Post;
