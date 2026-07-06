import { useEffect, useState } from "react";

function UseEffectEx() {
  const [courseName, setCourseName] = useState("Angular");
  const [courseVideos, setVideoCount] = useState<number>(0);

  useEffect(() => {
    console.log("Plain UseEffect");
  });

  useEffect(() => {
    alert("welcome to Use Effect Component");
    console.log("UseEffect With Empty Dependencies");
  }, []);

  useEffect(() => {
    console.log("UseEffect with Dependencies => courseVideos");
  }, [courseVideos]);

  useEffect(() => {
    console.log("UseEffect with Dependencies => courseName");
  }, [courseName]);

  useEffect(()=>{
     console.log("UseEffect with Dependencies with BOTH");
  },[courseVideos,courseName])

  const changeCourseName = () => {
    setCourseName("React.Js");
  };

  const changeCourseVideosLength = (videoLength: number) => {
    setVideoCount(videoLength);
  };

  return (
    <div>
      <h5>UseEffect</h5>
      <p>{courseName}</p>
      <button onClick={changeCourseName}>Chnage Course</button>
      <br />
      <br />
      <p>{courseVideos}</p>
      <button onClick={() => changeCourseVideosLength(10)}>
        Chnage Course Videos 10
      </button>
      <button onClick={() => changeCourseVideosLength(20)}>
        Chnage Course Videos 20
      </button>
      <button onClick={() => changeCourseVideosLength(30)}>
        Chnage Course Videos 30
      </button>
    </div>
  );
}

export default UseEffectEx;
