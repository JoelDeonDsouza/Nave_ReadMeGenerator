import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  padding: 25px 40px;
  height: 700px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 960px) {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    height: 1800px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 25%;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 30%;
    margin-left: 0;
  }
`;

export const SelectorContainer = styled.div`
  width: 120%;
  height: 100%;
  border-radius: 12px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 90%;
  }
`;

export const EditorContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-left: 20px;
  border-radius: 12px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 50%;
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

export const RenderContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-left: 20px;
  border-radius: 12px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 50%;
    margin-left: 0;
    margin-bottom: 50px;
  }
`;

// Template grid layout //
export const GridLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
  padding: 0px 2px;
  flex-direction: row;
  height: 30%;
  :hover {
    background-color: #cdfadb;
  }
  @media screen and (max-width: 960px) {
    height: 100%;
    margin-top: 18px;
  }
`;
export const GridBox = styled.div`
  width: calc(45% - 5px);
  height: 50%;
  margin-bottom: 20px;
  padding: 12px 12px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  align-content: center;
  text-align: center;
  @media screen and (max-width: 960px) {
    height: 40%;
  }
`;
// icon and title //
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailsText = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
`;

// text editor //
export const TextEditorTab = styled.textarea`
  height: 100%;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 8px 10px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  outline: none;
`;

// display readMe//
export const DisplayOutCome = styled.div`
  height: 100%;
  padding: 0px 10px;
  border-radius: 12px;
  overflow-y: scroll;
}
`;

// Copy properties //
export const CopyProperties = styled.div`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #000;
  padding: 5px 10px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

// Download properties //
export const DownloadProperties = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
