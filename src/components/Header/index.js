import React from 'react';
import { GiBigGear } from 'react-icons/gi';
import { MdList } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import { Container } from './styles';

export default function Header() {
    return (
        <Container>
            <div className="top">
                <GiBigGear size="medium" className="gear" />
                <h1>Tech Pubs</h1>
                <img src="https://avatars.io/twitter/teste" alt="Avatar" />
                <div>
                    <p className="user">Gustavo</p>
                    <Button variant="contained" size="small" color="secondary">
                        Logout
                    </Button>
                </div>
            </div>
            <div className="bot">
                <MdList className="list" />
                <h1>Part List</h1>
            </div>
        </Container>
    );
}
