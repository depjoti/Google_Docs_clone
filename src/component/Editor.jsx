
import { useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'
import { Box } from '@mui/material';
import styled from '@emotion/styled';

import { io } from 'socket.io-client';

import { useParams } from 'react-router-dom';
// import { GoogleApps } from './Sidebar';

const Component = styled.div`

    background:#F5F5F5;
`;
// const GoogleApps = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 20%;
//   background: #F3F3F3;
// `;

// const Sidebar = styled.div`
//   width: 20%;
//   background: #F3F3F3;
// `;

// const EditorContent = styled.div`
//   flex: 1;
//   background: white;
// `;

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];
export const Editor = () => {

    const { id } = useParams();

    useEffect(() => {
        new Quill('#container', {
            theme: 'snow', modules: {
                toolbar: toolbarOptions
            }
        });
    }, []);





    return (
        <Component>

            {/* <GoogleApps /> */}

            <Box
                className="container" id="container" >

            </Box>


        </Component>
    )
}
