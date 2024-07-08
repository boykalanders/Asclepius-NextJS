import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import PatientForm from "@/components/forms/PatientForm";
import favicon from "@/public/favicon.ico";
import OnboardingImage from "@/public/assets/images/onboarding-image.jpg"

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image 
            src={favicon}
            alt="Asclepius"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-primary xl:text-left">
            &copyright; 2024 Asclepius
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image 
        src={OnboardingImage}
        alt="asclepius"
        height={1000}
        width={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
 