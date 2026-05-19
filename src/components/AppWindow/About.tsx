import AppWindow from "./AppWindow";
import { AppType } from "@/types/types";

function About({ app }: { app: AppType }) {
  return (
    <AppWindow app={app}>
      <div className="p-4 h-full">
        <p>This is the About app content.</p>
      </div>
    </AppWindow>
  );
}

export default About;
