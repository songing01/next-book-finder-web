import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";

export default function BestSellerBookCard({ book }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex flexDir="column" w="100%" h="100%" >
            <Image
                src={book.book_image}
                objectFit="fill"
                w="100%"
                maxW="100%"
                h="80%"
                minH="80%"
                borderRadius="0.5rem"
            />
            <Text fontWeight="bold" color="white" mt="1rem">{book.title}</Text>
            <Text color="white">{book.author}</Text>
        </Flex>
    );
}
