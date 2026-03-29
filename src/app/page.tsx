import Taskbar from "@/components/Taskbar/Taskbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="min-h-screen w-full max-w-3xl">
        <p className="px-32 py-12">MAIN COMPONENT / MONITOR</p>
        <div className="ml-30 *:my-3">
        <img src="/assets/images/macarena.gif" alt="Macarena" className="h-40 w-30"/>
        <img src="https://web.archive.org/web/20091023003314im_/http://geocities.com/MotorCity/Track/6731/car2anim.gif"/>
        <img src="https://web.archive.org/web/20091026235359im_/http://ar.geocities.com/mcalniquer/images/bienvenidos.gif"/>
        <img src="https://web.archive.org/web/20091026235359im_/http://ar.geocities.com/mcalniquer/images/mail.gif"/>
        </div>
        <Taskbar />
      </main>
    </div>
  );
}
