import { FolderSearch2 } from "lucide-react";
import React from "react";
import styled from "styled-components";

const NoResults = styled.div`
  text-align: center;
  padding: 40px;
  color: #6b7280;
  font-size: 1.125rem;
`;

const NoResult: React.FC = () => {
  return (
    <NoResults>
      <FolderSearch2 size={50} />
      <p>No recipes found. Try a different search term.</p>
    </NoResults>
  );
};

export default NoResult;
