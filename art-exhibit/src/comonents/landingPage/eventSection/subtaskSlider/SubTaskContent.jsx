import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextContainer from "./components/textSubComponents/TextContainer";
import TextUnderlines from "./components/textSubComponents/TextUnderlines";


const titleStyles = {
  textDecoration: "none",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "25px",
  lineHeight: "32px",
  inlineSize: "100%",
  overflowWrap: "break-word",
  color: '#FFFFFF'
};

const contentStyles = {
  ...titleStyles,
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '25px',
  opacity: 0.8
}

const dateStyles = {
  ...titleStyles,
  fontWeight: 500,
  fontSize: '22px',
  marginTop: '1rem'
}

const createdByStyles = {
  ...dateStyles,
  color: '#C786FF',
  marginTop: '2rem'
}

const SubTaskContent = ({ title, content, date, createdBy }) => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        pr: 3,
        width: "100%",
        height: "80%",
        background: "linear-gradient(to top, black, rgba(242, 242, 242, 0))",
      }}
    >
      <Stack direction="row" alignItems="center" width="100%" spacing={2}>
        <TextUnderlines length='10%' thickness='5px'/>
       <TextContainer>
          <Typography
           style={titleStyles}
          >
            {title}
          </Typography>
        </TextContainer>
      </Stack>
        <TextUnderlines length='45%' thickness='2px'/>
     <TextContainer>
     <Stack direction={"column"} padding={'5% 13% '}>
      <Typography
       style={contentStyles}
      >
        {content}
      </Typography>
      <Typography
      style={dateStyles}
      // align="center"
        >
        {date}
      </Typography>
      <Typography
        align="center"
        style={createdByStyles}
        >
        {createdBy}
      </Typography>
      </Stack>
      </TextContainer>
    </Box>
  );
};

export default SubTaskContent;
