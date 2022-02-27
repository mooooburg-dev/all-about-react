import React from 'react';
import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

const Base = styled.div``;

const Container = styled.div``;

const ArrowButton = styled.button``;

const CarouselList = styled.ul``;

const CarouselListItem = styled.li``;

const NavButton = styled.button``;

const NavItem = styled.li``;

const Nav = styled.ul``;

const banners = [];

export default function Carousel() {
  return (
    <Base>
      <Container>
        <ArrowButton>
          <RiArrowDropLeftLine />
        </ArrowButton>
        <Carousel></Carousel>
        <ArrowButton>
          <RiArrowDropRightLine />
        </ArrowButton>
      </Container>
    </Base>
  );
}
