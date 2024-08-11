import chat from "../../assets/chat.svg";
export const Post = () => {
  return (
    <div className="mt-4">
      {/* Post Item */}
      <div
        className="p-6 bg-[#1C1C1E] rounded-lg shadow-lg mb-4 border border-[#4A96FF]"
        style={{ border: "2px solid rgba(53, 55, 59, 1)" }}
      >
        <div className="flex items-start">
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/d876/9b85/25c869bf7a20b010741bad2949259c0d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=buvGABhI-ZfjjYBpmWc8aoGPM02Jw2DLl8nCePiCatgDI5ZB4nXXltuQ7fJctA3jqlxV2NU4sA3~YrFzEWYhNv6YdglSUnyc72emTyBvPTUhmlaCovtkO8-LEbUTMVHzTpJ8OBAj3BPyu6NFKTQkM-9ZdPx7ShckuHEblG28yZBs1shaTIot84UyWM8jEvaHeEJUsPLzTc3Z0P94sVC1ROFkiZmOR91rR38~-iybiVn9TuVRvepJmowPV3A2CVLD19Ug~cWmbPl8IHR1OGEy4RLKX6Wnhu4mueyRgo06XisaKBlynIZU3qNvBkSzRjZaNlg5f3HE8lv6O7zQt429tg__"
            }
            alt="User Avatar"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="ml-4 flex-grow">
            <h3
              className="text-lg font-medium text-[#C5C7CA]"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "19.36px",
                textAlign: "left",
              }}
            >
              Theresa Webb
            </h3>
            <p className="text-[#7F8084] text-sm mt-1">5mins ago</p>
          </div>
          <button className="text-[#B3B3B3]">...</button>
        </div>

        <div
          className="mt-4 p-4 bg-[#2C2C2E] rounded-lg flex w-full"
          style={{ background: "rgba(25, 25, 32, 1)" }}
        >
          <div className="flex gap-4 w-full">
            <div className="w-12 h-12 flex justify-center items-start">
              <div
                className="w-12 h-12 rounded-full flex justify-center items-center"
                style={{ background: "rgba(39, 41, 45, 1)" }}
              >
                👋
              </div>
            </div>

            <p className="text-[#7F8084] text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <img src={chat} alt="User Avatar" className="h-5 w-5" />
          <label className="text-sm text-[#7F8084]">24 comments</label>
        </div>
      </div>

      {/* Another Post Item */}
      <div
        className="p-6 bg-[#1C1C1E] rounded-lg shadow-lg mb-4 border border-[#4A96FF]"
        style={{ border: "2px solid rgba(53, 55, 59, 1)" }}
      >
        <div className="flex items-start">
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/a50a/a686/c235d3ee2b054cb561d4d7772e564df4?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D2qHdJviStoZ3m7oLtVyhp598Iuq7tQQnmsObSRsjdeCCWI-cGwDovJhlYY-aqhHH76Ir8rl~Gu5tG9tpTGOm2kOcuzVaQ35jSJ3gxirAZDtzaH1DGbUxNf8PYRiuHWmgrq11XuDZn0YyxIwUUeLr5XlEAYXqQkFtpWazgxlUHvy4STHhMxSnuf-JzkVlE4f8omJYzxcS-~NCPorF~C4M~ofT07mWUYdBpHzu5R2ueJMWuyKDfx-vOo-na~yzYP0o~QCAg6~QRKtSP6Q-BcJlYBc8Dw8B5GsRBAB2MdhgyMzaubOwyyNLMLiM9R1BIggLdGBb5VH3ZYwohPXM9XBEg__"
            }
            alt="User Avatar"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="ml-4 flex-grow">
            <h3
              className="text-lg font-medium text-[#C5C7CA]"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "19.36px",
                textAlign: "left",
              }}
            >
              Marvin McKinney
            </h3>
            <div className="text-[#7F8084] text-sm mt-1">
              <span>8 mins ago</span>
              <span className="mx-2">•</span>
              <span>Edited</span>
            </div>
          </div>
          <button className="text-[#B3B3B3]">...</button>
        </div>

        <div
          className="mt-4 p-4 bg-[#2C2C2E] rounded-lg flex w-full"
          style={{ background: "rgba(25, 25, 32, 1)" }}
        >
          <div className="flex gap-4 w-full">
            <div className="w-12 h-12 flex justify-center items-start">
              <div
                className="w-12 h-12 rounded-full flex justify-center items-center"
                style={{ background: "rgba(39, 41, 45, 1)" }}
              >
                😞
              </div>
            </div>

            <p className="text-[#7F8084] text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <img src={chat} alt="User Avatar" className="h-5 w-5" />
          <label className="text-sm text-[#7F8084]">24 comments</label>
        </div>
      </div>
    </div>
  );
};
