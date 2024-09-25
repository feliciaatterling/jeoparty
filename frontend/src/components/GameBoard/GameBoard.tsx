import PointCard from "@/components/PointCard/PointCard";
import { ScGameBoard, ScCategory, ScCard } from "./GameBoard.styled";

interface GameBoardProps {
  onQuestionClick: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ onQuestionClick }) => {
  const points = [200, 400, 600, 800, 1000];
  const categories = ["History", "Movies", "Art", "Science", "Books", "Music"];

  return (
    <div>
      {/*SVG logo */}

      <ScGameBoard>
        <ScCategory>
          {/*containing the board, flexbox rows */}
          {categories.map((title, index) => (
            <div>
              {title}
              <ScCard>
                {/*containing the board, flexbox rows// column, maps through title and 5 cards */}
                {points.map((point, index) => (
                  <PointCard
                    points={point}
                    category={title}
                    onClick={onQuestionClick}
                  />
                ))}
              </ScCard>
            </div>
          ))}
        </ScCategory>
      </ScGameBoard>
    </div>
  );
};

export default GameBoard;
