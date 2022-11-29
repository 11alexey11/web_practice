import PropTypes from 'prop-types';

import { LinkStyled } from './style';

const Link = ({ href, children }) => {
    return <LinkStyled to={href}>{children}</LinkStyled>
};

Link.propTypes = {
    children: PropTypes.string,
    href: PropTypes.string,
};


export { Link };