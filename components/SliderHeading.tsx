import Link from 'next/link';

interface SliderHeadingProps {
  sectionTitle: string;
  bgColor?: string;
  path: string;
}

function SliderHeading({ sectionTitle, bgColor, path }: SliderHeadingProps) {
  return (
    <div className={`flex items-center px-3 justify-between p-2 ${bgColor ? bgColor : 'bg-white'} text-gray-700 shadow-sm`}>
      <p className="font-bold uppercase">{sectionTitle}</p>
      <Link href={path} passHref>
        <a className="capitalize text-xs text-yellow-400">show all products</a>
      </Link>
    </div>
  );
}

export default SliderHeading;
