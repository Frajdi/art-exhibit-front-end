import { useState } from "react";

import Stack from "@mui/material/Stack";
import ImageContainer from "./components/ImageContainer";
import SubTaskContent from "./SubTaskContent";
import { subTasks, subImages } from "./components/data";

const SubtaskSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(3);

  return (
    <Stack justifyContent="center" alignItems="center" height="80vh" width={'100%'}>
      <Stack direction="row" height={"373px"} width={"1195px"} alignItems="flex-end">
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
                part={index + 1}
                content={subTasks[index]}
              />
            )}
          </ImageContainer>
        ))}
      </Stack>
    </Stack>
  );
};

export default SubtaskSlider;
