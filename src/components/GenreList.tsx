import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useData from '../hooks/useData';
import { Genre } from '../hooks/useGenres';

const GenreList = () => {
  const { data } = useData<Genre>('/genres');
  return (
    <div>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
