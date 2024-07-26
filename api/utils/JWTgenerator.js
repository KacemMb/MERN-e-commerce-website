import jwt from 'jsonwebtoken';

const generateTokenAndSerCookies = (user_id,role,res) => {
    const token = jwt.sign({ user_id,role }, process.env.JWT_SECRET, { expiresIn: '2d' });
    res.cookie('tokenmessanger', token, {
        httpOnly: true,
        maxAge: 2 * 24 * 60 * 60 * 1000,
        sameSite : 'strict',
    });
    return token;
};

export default generateTokenAndSerCookies;