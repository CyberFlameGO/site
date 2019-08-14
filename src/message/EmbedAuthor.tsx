import styled from "@emotion/styled"
import React from "react"
import { Theme } from "../themes"
import { Author } from "./Message"

const Container = styled.div`
  display: flex;
  align-items: center;
`

const AuthorImage = styled.img`
  width: 20px;
  height: 20px;

  margin: 0 8px 0 0;

  object-fit: cover;
  border-radius: 50%;
`

const AuthorNameNormal = styled.span<{}, Theme>`
  color: ${({ theme }) => theme.message.embed.author};
  font-size: 14px;
  font-weight: 500;
  white-space: pre-wrap;
`

const AuthorNameLink = AuthorNameNormal.withComponent("a")

type Props = {
  author: Author
}

export default function EmbedAuthor(props: Props) {
  const { name, url, iconUrl } = props.author

  const AuthorName = !url ? AuthorNameNormal : AuthorNameLink

  return (
    <Container>
      {iconUrl !== undefined && (
        <AuthorImage src={String(iconUrl)} alt="Author image" />
      )}
      {name !== undefined && (
        <AuthorName href={String(url)}>{String(name)}</AuthorName>
      )}
    </Container>
  )
}
