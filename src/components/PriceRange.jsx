/* eslint-disable react/prop-types */
const PriceRange = ({ price, setPrice, setTooltipStyle, tooltipStyle }) => {
  return (
    <div title={price} className="flex flex-col md:flex-row items-center gap-2">
      <p className="text-nowrap">Price Range:</p>
      <div className="relative flex items-center gap-2">
        $0
        <input
          type="range"
          value={price}
          min="0"
          max="4000"
          onChange={(e) => {
            const newValue = e.target.value;
            setPrice(newValue);

            const rangeWidth = e.target.offsetWidth;
            const tooltipWidth = 40;
            const max = e.target.max;
            const min = e.target.min;
            const percent = (newValue - min) / (max - min);
            const offset = percent * (rangeWidth - tooltipWidth);

            setTooltipStyle({ left: `${offset}px`, opacity: 1 });
          }}
          onFocus={() => setTooltipStyle({ ...tooltipStyle, opacity: 1 })}
          onBlur={() => setTooltipStyle({ ...tooltipStyle, opacity: 0 })}
        />
        $4000
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none transition-opacity duration-200"
          style={tooltipStyle}
        >
          {price}
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
