interface ResultProps {
  result: string | null;
}

const Result = ({ result }: ResultProps) => {
  return <p class="font-semibold text-lg text-center bg-green-700 rounded-md mt-2">{result} metros</p>;
};

export default Result;
