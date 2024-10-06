import Image from "next/image";
import Card from "@/app/components/Card";
import Section from "@/app/components/Section";

const ErrorMessage = ({
  errorTitle,
  errorDescription = `We're so sorry but it's for the test.`,
}) => {
  return (
    <Card>
      <div className="p-6 text-center">
        <Image
          src="/icons/error.svg"
          className="mx-auto mb-6"
          alt="Error"
          width={50}
          height={50}
        />
        <h3 className="mb-2 text-lg">{errorTitle}</h3>
        <p className="text-secondary">{errorDescription}</p>
      </div>
    </Card>
  );
};

export default ErrorMessage;
