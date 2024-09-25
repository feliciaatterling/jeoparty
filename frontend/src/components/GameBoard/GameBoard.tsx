import PointCard from "@/components/PointCard/PointCard";
import { ScGameBoard, ScCategory } from "./GameBoard.styled";

export default function GameBoard() {
  const points = [200, 400, 600, 800, 1000];
  const categories = ["History", "Movies", "Art", "Science", "Books", "Music"];

  return (
    <div style={{ paddingTop: "20vh" }}>
      {/*SVG logo */}

      <ScGameBoard>
        <ScCategory>
          {/*containing the board, flexbox rows */}
          {categories.map((title, index) => (
            <div>
              {title}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                {/*containing the board, flexbox rows// column, maps through title and 5 cards */}
                {points.map((point, index) => (
                  <PointCard points={point} category={title} />
                ))}
              </div>
            </div>
          ))}
        </ScCategory>
      </ScGameBoard>
    </div>
  );
}
