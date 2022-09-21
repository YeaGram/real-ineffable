import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function InfinteTilesBackground({ classs, mSpeed, mDelay }) {
  const itemStyle = "block relative h-52 w-52 mx-1";
  return (
    <Marquee
      gradient={false}
      speed={mSpeed}
      delay={mDelay}
      className="overflow-hidden"
    >
      <span className={itemStyle}>
        <Image
          src="/background/palet1.png"
          alt="img"
          className={classs}
          layout="fill"
          objectFit="contain"
        />
      </span>
      <span className={itemStyle}>
        <Image
          src="/background/palet1.png"
          alt="img"
          className={classs}
          layout="fill"
          objectFit="contain"
        />
      </span>
      <span className={itemStyle}>
        <Image
          src="/background/palet2.png"
          alt="img"
          className={classs}
          layout="fill"
          objectFit="contain"
        />
      </span>
      <span className={itemStyle}>
        <Image
          src="/background/palet3.png"
          alt="img"
          className={classs}
          layout="fill"
          objectFit="contain"
        />
      </span>
      <span className={itemStyle}>
        <Image
          src="/background/palet4.png"
          alt="img"
          className={classs}
          layout="fill"
          objectFit="contain"
        />
      </span>
      <span className={itemStyle}>
        <Image
          src="/background/palet1.png"
          alt="img"
          className={classs}
          layout="fill"
          objectFit="contain"
        />
      </span>
      <span className={itemStyle}>
        <Image
          src="/background/palet1.png"
          alt="img"
          className={classs}
          layout="fill"
          objectFit="contain"
        />
      </span>
      <span className={itemStyle}>
        <Image
          src="/background/palet2.png"
          alt="img"
          className={classs}
          layout="fill"
          objectFit="contain"
        />
      </span>
      <span className={itemStyle}>
        <Image
          src="/background/palet3.png"
          alt="img"
          className={classs}
          layout="fill"
          objectFit="contain"
        />
      </span>
      <span className={itemStyle}>
        <Image
          src="/background/palet4.png"
          alt="img"
          className={classs}
          layout="fill"
          objectFit="contain"
        />
      </span>
    </Marquee>
  );
}
