import React from "react";

interface ButtonWithIconProps {
  icon: JSX.Element;
  label: string;
  onClick?: () => void;
}

const DivWithIcon = ({ icon, label, onClick }: ButtonWithIconProps) => {
  const Icon = icon;

  return (
    <div className={"flex items-center"} onClick={onClick}>
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </div>
  );
};

export default DivWithIcon;
