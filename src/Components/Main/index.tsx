/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
// components //
import {
  HeroContainer,
  HeaderContainer,
  SelectorContainer,
  EditorContainer,
  RenderContainer,
  GridLayout,
  GridBox,
  DetailsContainer,
  DetailsText,
  TextEditorTab,
  DisplayOutCome,
  CopyProperties,
  DownloadProperties,
} from "./styles";
// templates //
import { templates } from "../assets/data";
// icons //
import { FaCopy } from "react-icons/fa";
import { IoCloudDownloadSharp } from "react-icons/io5";
import ReactMarkdown from "react-markdown";

const Main = () => {
  // Select template //
  const [selectedTemplate, setSelectedTemplate] = useState<{
    id: number;
    name: string;
    icon: any;
    content: string;
  } | null>(null);
  // Active to edit //
  const [editedContent, setEditedContent] = useState("");
  // handle selected //
  const handleTemplateSelect = (template: any) => {
    setSelectedTemplate(template);
    setEditedContent(template.content);
  };

  return (
    <HeroContainer>
      <HeaderContainer>
        <SelectorContainer>
          <GridLayout>
            {templates.map((template, index) => (
              <GridBox
                key={index}
                onClick={() => handleTemplateSelect(template)}
              >
                <DetailsContainer>
                  <template.icon size={28} color="#453F78" />
                  <DetailsText>{template.name}</DetailsText>
                </DetailsContainer>
              </GridBox>
            ))}
          </GridLayout>
        </SelectorContainer>
      </HeaderContainer>
      <EditorContainer>
        <CopyProperties
          onClick={() => navigator.clipboard.writeText(editedContent)}
        >
          <FaCopy size={18} color="#eee" />
        </CopyProperties>
        <TextEditorTab
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          rows={10}
          cols={50}
        />
      </EditorContainer>
      <RenderContainer>
        <DownloadProperties>
          <IoCloudDownloadSharp size={18} color="#000" />
        </DownloadProperties>
        <DisplayOutCome>
          <ReactMarkdown>{editedContent}</ReactMarkdown>
        </DisplayOutCome>
      </RenderContainer>
    </HeroContainer>
  );
};

export default Main;
