import HeroVideoDialog from "../components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative max-w-lg mx-auto">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="/video.mp4"
        thumbnailSrc="/image.jpeg"
        thumbnailAlt="Hero Video"
        containerClass="w-full h-72" // Increased height from h-48 to h-64
        imageClass="w-full h-full object-cover rounded-md"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/video.mp4"
        thumbnailSrc="/image.jpeg"
        thumbnailAlt="Hero Video"
        containerClass="w-full h-72" // Increased height for dark mode as well
        imageClass="w-full h-full object-cover rounded-md"
      />
    </div>
  );
}
