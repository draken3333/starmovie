import React from "react";
const ganresTags = [
  "Detective",
  "Action",
  "Drama",
  "Historical",
  "Comedy",
  "Melodrama",
  "Family",
  "Mystery",
  "Fantasy",
  "Thriller",
];
const FiltersBar = () => {
  return (
    <div className="filtersBar-wrapper">
      <div className="filtersBar-filter">
        <div className="filterBar-name">
          <h1 className="filterBar-name-title">Genres</h1>
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="8"
                cy="8"
                r="8"
                transform="rotate(-180 8 8)"
                fill="#F42460"
              />
              <g clip-path="url(#clip0_8_1003)">
                <path
                  d="M8.00473 4.00763L12.0833 8.77671C12.2991 9.02905 12.2991 9.43856 12.0833 9.6909C11.8675 9.94324 11.5172 9.94324 11.3014 9.6909L8.00473 5.83602L4.70802 9.6909C4.49222 9.94324 4.14201 9.94324 3.9262 9.6909C3.7104 9.43856 3.7104 9.02905 3.9262 8.77671L8.00473 4.00763Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_1003">
                  <rect
                    width="9.69231"
                    height="11.3333"
                    fill="white"
                    transform="translate(12.8462 12.75) rotate(-180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>

        {ganresTags.map((g, i) => (
          <div key={i} className="checkBoxes">
            <input type="checkbox" name={g} />
            <label for={g}>{g}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersBar;
