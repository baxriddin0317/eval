import Button from "@/components/common/Button";
import UploadSection from "@/components/home/UploadSection";

export default function Home() {
  
  return (
    <main className="pt-52 pb-5">
      <section className="flex flex-col gap-5 items-center justify-center w-full max-w-5xl h-full mx-auto px-2.5 ">
        <UploadSection />
        <Button className="ml-auto h-14">
          Evaluate
        </Button>
      </section>
    </main>
  );
}
