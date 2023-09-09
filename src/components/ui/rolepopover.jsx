import {
  Popover,
  PopoverTrigger,
  Button,
  Portal,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  Box,
  PopoverFooter,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";

import { useRef } from "react";

const RolePopover = () => {
  const initRef = useRef();
  return (
    <Popover initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button colorScheme={"teal"}>Role</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverHeader>Technical Trainee</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Box>
                  Currently going through an Internship and Training on Data
                  Insights
                </Box>
              </PopoverBody>
              <PopoverFooter>
                <Link href="https://www.teksystems.com/en-in">
                  <Text>
                    goto {"<"}TEKsystems{"/>"}
                  </Text>
                </Link>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
};

export default RolePopover;
