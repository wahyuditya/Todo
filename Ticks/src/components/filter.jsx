import { useState } from "react";

function Filter({ filterByAll, filterByCompleted }) {
  const [isActive, setIsActive] = useState("");

  const handleByAll = (btnId) => {
    setIsActive(btnId);
    filterByAll();
  };

  const handleByCompleted = (btnId) => {
    setIsActive(btnId);
    filterByCompleted();
  };

  return (
    <>
      <div className="filter">
        <div className="cat">
          <button onClick={filterByAll}>All</button>
          <button onClick={filterByCompleted}>Completed</button>
          <button onClick={filterByIncomplete}>Incomplete</button>
          <button
            className={isActive === "allBtn" ? "cat-btn-active" : ""}
            onClick={() => handleByAll("allBtn")}
          >
            All
          </button>
          <button
            className={isActive === "completedBtn" ? "cat-btn-active" : ""}
            onClick={() => handleByCompleted("completedBtn")}
          >
            Completed
          </button>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.125 4.5H22.875C23.1734 4.5 23.4595 4.61853 23.6705 4.8295C23.8815 5.04048 24 5.32663 24 5.625C24 5.92337 23.8815 6.20952 23.6705 6.4205C23.4595 6.63147 23.1734 6.75 22.875 6.75H1.125C0.826631 6.75 0.540483 6.63147 0.329505 6.4205C0.118526 6.20952 0 5.92337 0 5.625C0 5.32663 0.118526 5.04048 0.329505 4.8295C0.540483 4.61853 0.826631 4.5 1.125 4.5ZM4.5 11.625C4.5 11.3266 4.61853 11.0405 4.8295 10.8295C5.04048 10.6185 5.32663 10.5 5.625 10.5H18.375C18.6734 10.5 18.9595 10.6185 19.1705 10.8295C19.3815 11.0405 19.5 11.3266 19.5 11.625C19.5 11.9234 19.3815 12.2095 19.1705 12.4205C18.9595 12.6315 18.6734 12.75 18.375 12.75H5.625C5.32663 12.75 5.04048 12.6315 4.8295 12.4205C4.61853 12.2095 4.5 11.9234 4.5 11.625ZM9 17.625C9 17.3266 9.11853 17.0405 9.3295 16.8295C9.54048 16.6185 9.82663 16.5 10.125 16.5H13.875C14.1734 16.5 14.4595 16.6185 14.6705 16.8295C14.8815 17.0405 15 17.3266 15 17.625C15 17.9234 14.8815 18.2095 14.6705 18.4205C14.4595 18.6315 14.1734 18.75 13.875 18.75H10.125C9.82663 18.75 9.54048 18.6315 9.3295 18.4205C9.11853 18.2095 9 17.9234 9 17.625Z"
            fill="#242424"
          />
        </svg>
      </div>
    </>
  );
}

export default Filter;
