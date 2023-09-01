import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";

const ScrollingTestimonials = () => {
  return (
    <Stack spacing={2} direction = {"row"} width={'100%'} height={'517px'} sx={{borderRadius: '10px', overflow: 'hidden'}}>
        <Stack width={'30%'}>
          <TestimonialList list={testimonials.top} duration={75} />
          <TestimonialList list={testimonials.top} duration={75} />
          <TestimonialList list={testimonials.top} duration={75} />
        </Stack>
        <Stack width={'30%'}>
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
        </Stack>
        <Stack  width={'30%'}>
          <TestimonialList list={testimonials.bottom} duration={75} />
          <TestimonialList list={testimonials.bottom} duration={75} />
          <TestimonialList list={testimonials.bottom} duration={75} />
        </Stack>
    </Stack>
  );
};

const TestimonialList = ({ list, reverse = false, duration = 50 }) => {
  return (
    <motion.div
      initial={{ translateY: reverse ? "-100%" : "0%" }}
      animate={{ translateY: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
          >
            <img style={{width: '187px', height: '220px', borderRadius: '10px', objectFit: "cover",margin: '1rem 0' }} src={t.img} />
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      img: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/74386/111646/1630169598435_IMG_20200930_135106__70150.1630495879.jpg?c=2",
    },
    {
      id: 2,
      img: "https://img.freepik.com/premium-photo/photo-3d-illustration-head-abstract-minimalist-wallpaper-background_961015-9.jpg",
    },
    {
      id: 3,
      img: "https://lh3.googleusercontent.com/ci/AA1T9HKpZctvmpml8sWTAkWdp4As64C1ebatgv7fm-AixJq912_Pay8j_V2qdjndhfOoR43aZw6P",
    },
    {
      id: 4,
      img: "https://www.singulart.com/images/artworks/v2/cropped/2479/main/zoom/421973_6174f36119bea57130b010e0aa91ce57.jpeg",
    },
    {
      id: 5,
      img: "https://guardian.ng/wp-content/uploads/2022/12/African-art-scaled.jpeg",
    },
    {
      id: 6,
      img: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGR2YW5nb2doLXNlbGYtcG9ydHJhaXQtbTAxLWpvYjY2MV8yLWwxMDBvNmVmLmpwZw.jpg?s=Z0Kzlvg5AzQyVgGA57nQNaN7rRoCdgkiuIEwRAdQTU4",
    },
  ],
  middle: [
    {
      id: 1,
      img: "https://tds-images.thedailystar.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2022/10/14/ai_art_generator.png?itok=kgyM3PUE",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2023/03/02/20/05/ai-generated-7826359_640.jpg",
    },
    {
      id: 3,
      img: "https://www.mutualart.com/img/homePageSliderImg/never_miss_an_exhibition.png",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/22/fe/88/22fe8831133c2556ea189a36115b45dc--knifes-artist-painting.jpg",
    },
    {
      id: 5,
      img: "https://www.singulart.com/images/artworks/v2/cropped/9047/main/zoom/1730475_2d3047470fe2c7d6bb53ca9a3fa90bca.jpeg",
    },
    {
      id: 6,
      img: "https://thumbs.dreamstime.com/b/abstract-blue-green-orange-marble-texture-acrylics-trendy-art-painting-background-129708972.jpg",
    },
  ],
  bottom: [
    {
      id: 1,
      img: "https://res.cloudinary.com/indonesiadesign/image/upload/ar_1:1,f_auto,fl_progressive,w_1080/the-scream.jpg",
    },
    {
      id: 2,
      img: "https://s3.amazonaws.com/showflipper/product/69601536314088.jpg",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/550x/b1/e3/db/b1e3dbadf64b89e35dc11e803de90b60.jpg",
    },
    {
      id: 4,
      img: "https://www.scottishlandscapepainting.co.uk/wp-content/uploads/2015/01/Aberdeen-painting-print-beach-Scotland-art-canvas-scaled.jpg",
    },
    {
      id: 5,
      img: "https://images.theconversation.com/files/296052/original/file-20191008-128681-ngzwqb.jpg?ixlib=rb-1.1.0&rect=15%2C20%2C929%2C926&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    },
    {
      id: 6,
      img: "https://cpimg.tistatic.com/06448460/b/4/Modern-Art-Handmade-Canvas-Oil-Painting.jpg",
    },
  ],
};

export default ScrollingTestimonials;