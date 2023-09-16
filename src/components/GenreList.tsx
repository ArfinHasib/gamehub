import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useData from '../hooks/useData';
import { Genre } from '../hooks/useGenres';

const GenreList = () => {
  const { data, loading, error } = useData<Genre>('/genres');

  if (error) {
    return null;
  }
  if (loading) {
    return <Spinner />;
  }

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
