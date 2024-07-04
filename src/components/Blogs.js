import { Stack, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'

import { Card, CardBody, CardFooter, Image, Heading } from '@chakra-ui/react'
import React from 'react'

const Blogs = () => {
  return (
    <div>
      <h2>Incubator Connect</h2>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '330px' }}
          src="https://www.startupindia.gov.in/content/sih/en/bloglist/blogs/how-are-agritech-startups-revolutionising-farming-practices-in-india/_jcr_content/image/file/_jcr_content"
          alt=""
        />

        <Stack>
          <CardBody>
            <Heading size="md" mt="50px">
              How are AgriTech Startups Revolutionising Farming Practices in
              India
            </Heading>

            <Text py="2">
              With over 70% of India’s rural population still being dependent on
              agriculture for their livelihood, the need for innovation in the
              sector has always remained high.
            </Text>
          </CardBody>

          <CardFooter>
            <a href="https://www.startupindia.gov.in/content/sih/en/bloglist/blogs/how-are-agritech-startups-revolutionising-farming-practices-in-india.html">
              <Button variant="solid" colorScheme="blue">
                Read more..
              </Button>
            </a>
          </CardFooter>
        </Stack>
      </Card>

      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '330px' }}
          src="https://www.startupindia.gov.in/content/sih/en/bloglist/blogs/growth-through-learning-with-startupshala/_jcr_content/image/file/_jcr_content"
          alt=""
        />

        <Stack>
          <CardBody>
            <Heading size="md">
              विद्याति वृद्धि with StartupShala (Growth through Learning with
              StartupShala)
            </Heading>

            <Text py="2">
              In the bustling world full of aspiration, where entrepreneurship,
              business growth, and innovation are the buzzwords, Indian startups
              are emerging as a champion.
            </Text>
          </CardBody>

          <CardFooter>
            <a href="startupindia.gov.in/content/sih/en/bloglist/blogs/growth-through-learning-with-startupshala.html">
              <Button variant="solid" colorScheme="blue">
                Read more..
              </Button>
            </a>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '330px' }}
          src="https://www.startupindia.gov.in/content/sih/en/bloglist/blogs/Startup-Uncut-with-Mr-Sanjiv-Bikhchandani/_jcr_content/image/file/_jcr_content"
          alt=""
        />

        <Stack>
          <CardBody>
            <Heading size="md">
              Startup Uncut with Mr Sanjiv Bikhchandani
            </Heading>

            <Text py="2">
              With more than 1 lakh DPIIT recognised startups, Indian
              entrepreneurs have caused a dynamic shift in world’s perspective
              towards our innovation.
            </Text>
          </CardBody>

          <CardFooter>
            <a href="https://www.startupindia.gov.in/content/sih/en/bloglist/blogs/Startup-Uncut-with-Mr-Sanjiv-Bikhchandani.html">
              <Button variant="solid" colorScheme="blue">
                Read more..
              </Button>
            </a>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '330px' }}
          src="https://www.startupindia.gov.in/content/sih/en/bloglist/blogs/Brainstorming/_jcr_content/image/file/_jcr_content"
          alt=""
        />

        <Stack>
          <CardBody>
            <Heading size="md">
              Brainstorming the Brainstorming: 7 Ways to Convert Startup Ideas
              into Reality
            </Heading>

            <Text py="2">
              If we talk realistically, thousands of startups are already in
              existence, and probably more if we talk about startups globally.
            </Text>
          </CardBody>

          <CardFooter>
            <a href="https://www.startupindia.gov.in/content/sih/en/bloglist/blogs/Brainstorming.html">
              <Button variant="solid" colorScheme="blue">
                Read more..
              </Button>
            </a>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  )
}

export default Blogs
