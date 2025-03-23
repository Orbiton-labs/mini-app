import { FC } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

export interface PoolNameProps {
  token1Img: string;
  token2Img: string;
  token1Name: string;
  token2Name: string;
  feeTier?: string;
  className?: string;
}

export const PoolName: FC<PoolNameProps> = ({
  token1Img,
  token2Img,
  token1Name,
  token2Name,
  feeTier,
  className,
}) => {
  return (
    <div className={`flex justify-start items-center gap-2 ${className}`}>
      <Avatar className="pools_avatar-stack">
        <AvatarImage src={token1Img} />
        <AvatarImage
          style={{
            marginLeft: -5,
          }}
          src={token2Img}
        />
      </Avatar>
      <span className="bg-grey4 py-2 px-3 rounded-lg">
        {token1Name} - {token2Name}
      </span>
      {feeTier && <span className="bg-grey5 py-2 px-3 rounded-lg">{feeTier}%</span>}
    </div>
  );
};
