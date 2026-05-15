import AppWindow from "./AppWindow";

function About() {
  return (
    <div>
      <AppWindow title="About" icon="info-16x16-8bpp" children={<p>hola</p>}/>
    </div>
  );
}

export default About;
