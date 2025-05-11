import React from 'react';

const ConcaveLens = () => {
  return (
    <div className="w-full h-64 bg-green-500 text-white font-bold flex justify-center items-center" style={{
      clipPath: 'polygon(0% 0%, 5% 5%, 20% 10%, 35% 15%, 50% 12%, 65% 15%, 80% 10%, 95% 5%, 100% 0%, 100% 100%,50% 65% , 45% 70%, 40% 74%, 35% 77%, 30% 80%, 25% 84%, 20% 87%, 15% 90%, 10% 94%, 5% 97%, 0% 100%)'
    }}>
      Concave Lens
    </div>
  );
};

export default ConcaveLens;
