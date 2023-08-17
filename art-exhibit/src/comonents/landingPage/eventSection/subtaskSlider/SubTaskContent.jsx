import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextContainer from "./components/textSubComponents/TextContainer";
import TextUnderlines from "./components/textSubComponents/TextUnderlines";

const SubTaskContent = ({ part, content }) => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        pr: 3,
        width: "100%",
        height: "fit-content",
        background: "linear-gradient(to top, black, rgba(242, 242, 242, 0))",
      }}
    >
      <Stack direction="row" alignItems="center" width="100%" spacing={2}>
        <TextUnderlines length='10%' thickness='5px'/>
       <TextContainer>
          <Typography
            fontFamily={"Bruno Ace SC"}
            width={"fit-content"}
            fontSize={40}
            color={'white'}
          >
            PART {part}
          </Typography>
        </TextContainer>
      </Stack>
        <TextUnderlines length='45%' thickness='2px'/>
     <TextContainer>
      <Typography
        fontFamily={"Bruno Ace SC"}
        width={"fit-content"}
        fontSize={20}
        margin={3}
        color={'white'}
        sx={{ inlineSize: "100%", overflowWrap: "break-word" }}
      >
        {content}
      </Typography>
      </TextContainer>
    </Box>
  );
};

export default SubTaskContent;
