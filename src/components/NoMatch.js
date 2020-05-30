import React from 'react';
import Typography from '@material-ui/core/Typography';

const NoMatch = () => {
    return (
        <div className="noMatching-container">
            <Typography variant="h3">
                No Matching Route Found
            </Typography>
        </div>
    );
}

export default NoMatch;