import styled from "styled-components";
import { Button, Flex, Image, Text } from "@chakra-ui/react";

import { useRouter } from "next/router";
function BookCard({ book }) {
    const router = useRouter();
    return (
        <Button
            h="14rem"
            p="0"
            mb="1rem"
            variant="filled"
            bgColor="white"
            onClick={() => {
                router.push({
                    pathname: `/bookDescriptions/${book.id}`,
                    query: {
                        title: book.volumeInfo.title,
                        thumbnail:
                            book.volumeInfo &&
                            book.volumeInfo.imageLinks &&
                            book.volumeInfo.imageLinks.thumbnail,
                        buyLink: book && book.saleInfo && book.saleInfo.buyLink,
                        description:
                            book.volumeInfo && book.volumeInfo.description,
                        authors: book.volumeInfo && book.volumeInfo.authors,
                        ratings:
                            book.volumeInfo && book.volumeInfo.averageRating,
                        ratingsCount:
                            book.volumeInfo && book.volumeInfo.ratingsCount,
                    },
                });
            }}
        >
            <Flex w="100%" spacing="0.3rem" align="center">
                <Image
                    src={
                        book.volumeInfo &&
                        book.volumeInfo.imageLinks &&
                        book.volumeInfo.imageLinks.thumbnail
                    }
                    h="14rem"
                    w="10rem"
                    objectFit="fill"
                />
                <Flex flexDir="column" alignItems="flex-start" ml="2rem">
                    <Text fontSize="xl">
                        {book.volumeInfo && book.volumeInfo.title}
                    </Text>
                    <Authors>
                        by {book.volumeInfo && book.volumeInfo.authors}
                    </Authors>
                    <Publish>
                        {book.volumeInfo && book.volumeInfo.publisher}
                    </Publish>
                    <Text>
                        {book.volumeInfo && book.volumeInfo.publishedDate}
                    </Text>
                </Flex>
            </Flex>
        </Button>
    );
}
export default BookCard;
const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5px;
    word-wrap: break-word;
`;
const Authors = styled.div`
    font-size: medium;
    color: grey;
    margin-bottom: 2rem;
`;
const Publish = styled.div`
    margin-bottom: 5px;
`;
<<<<<<< HEAD
=======

/*
const smallThumbnail = book.volumeInfo.imageLinks.smallThumbnail;
const title = book.volumeInfo.title;
const authors = book.volumeInfo.authors;
const pageCount = book.volumeInfo.pageCount;
const publisher = book.volumeInfo.publisher;
const publishedDate = book.volumeInfo.publishedDate;
const averageRating = book.volumeInfo.averageRating;
const ratingsCount = book.volumeInfo.ratingsCount;
const description = book.volumeInfo.description;
const buyLink = book.saleInfo.buyLink;
*/



>>>>>>> e5226779919aa233665ad4c043f10a2a08bd351d
