import { Avatar, AvatarStack } from "@telegram-apps/telegram-ui";
import { FC } from "react";

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
      <AvatarStack className="pools_avatar-stack">
        <Avatar size={28} src={token1Img} />
        <Avatar
          style={{
            marginLeft: -5,
          }}
          size={28}
          src={token2Img}
        />
      </AvatarStack>
      <span>
        {token1Name} - {token2Name}
      </span>
      {feeTier && <span className="fee_tier">{feeTier}</span>}
    </div>
  );
};
