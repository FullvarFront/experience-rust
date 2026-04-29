type FeatureProps = {
  title: string;
  description: string;
};

function Feature({ title, description }: FeatureProps) {
  return (
    <div className="bg-stone-900 border border-stone-800 rounded-lg p-6">
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-stone-400">{description}</p>
    </div>
  );
}

export default Feature;
