import Link from "next/link";
import Image from "next/image";

const ContactProps = () => {
  return (
    <div className="flex flex-col md:gap-2">
      <div className="p-2 md:p-0">Connect With Me</div>
      <div className="flex">
        <Link href={"https://www.linkedin.com/in/akash-bhardwaj-b70a38161/"}>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
            alt=""
            className="mr-4 md:w-10 h-6 w-4"
          />
        </Link>
        <Link href={"https://github.com/akash23-ai"}>
          <img src="/github.png" alt="" className="mr-4 md:w-10 w-4" />
        </Link>
        <Link
          href={"https://twitter.com/AkashBh2024?t=ZIVvM108UpB5PssuhFIT6g&s=09"}
        >
          <img
            src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png"
            alt=""
            className="mr-4 md:w-10 w-4"
          />
        </Link>

        <Link href={""}>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/493f1aa6da674c05bc606ba5b9e8092b881e8626/67c76/assets/png/yt-ico.png"
            alt=""
            className="mr-4 md:w-10 w-4"
          />
        </Link>
      </div>
    </div>
  );
};

export default ContactProps;
