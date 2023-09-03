import { useState } from "react";

import Stack from "@mui/material/Stack";
import ImageContainer from "./components/ImageContainer";
import SubTaskContent from "./SubTaskContent";
import { subTasks, subImages, subtaskTitles, subtaskCreators, subtaskDates } from "./components/data";

const SubtaskSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(3);

  return (
    <Stack marginTop={5} alignItems="center" height="65vh" width={'100%'}>
      <Stack direction="row" height={"373px"} width={"100%"} alignItems="flex-end">
        {subImages.map((item, index) => (
          <ImageContainer
            key={item.url}
            width={`${100 / subImages.length}%`}
            index={index + 1}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          >
            <img
              src={item.url}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "drop-shadow(1rem 1rem 1rem rgba(0, 0, 0, 1))",
              }}
            />
            {hoveredIndex === index + 1 &&  (
              <SubTaskContent
                title={subtaskTitles[index]}
                content={subTasks[index]}
                date = {subtaskDates[index]}
                createdBy = {subtaskCreators[index]}
              />
            )}
          </ImageContainer>
        ))}
      </Stack>
    </Stack>
  );
};

export default SubtaskSlider;
