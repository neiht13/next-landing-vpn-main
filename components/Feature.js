import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Thủ tục đăng ký nhanh, gọn, dễ dàng",

  "Phòng học hiện đại, thực hành xe đời mới",

  "Môi trường học tập văn minh, khoa học",

  "Cam kết chất lượng dạy, học, thi",

  "Minh bạch, không phát sinh chi phí",

  "Đào tạo chuẩn theo quy định",

  "Khai giảng, học, thi đúng kế hoạch, đúng cam kết",

  "Học và thi ngay tại Trung tâm sát hạch của Trường",

  "Dạy theo nhu cầu người học",

  "Chế độ miễn giảm theo quy định"
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/img_1.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={400}
              width={400 }
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Lý do nên học tại
          </h3>
          <p className="my-2 text-black-600">
            Trung tâm Giáo dục nghề nghiệp kỹ thuật giao thông Đồng Tháp.
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
