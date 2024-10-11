// // pages/api/auth/update-password.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { getSession } from 'next-auth/react'; // Adjust based on your auth method
// import { User } from '@/src/models/User'; // Adjust import based on your User model
// import bcrypt from 'bcryptjs';

// export default async function updatePassword(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const session = await getSession({ req });
//   if (!session) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   const { currentPassword, newPassword } = req.body;

//   try {
//     // Fetch the user from the database
//     const user = await User.findById(session.user.id); // Adjust based on your auth method

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Compare the current password with the stored password
//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Current password is incorrect' });
//     }

//     // Hash the new password and save it
//     user.password = await bcrypt.hash(newPassword, parseInt(process.env.SALT_ROUNDS || '12'));
//     await user.save();

//     return res.status(200).json({ message: 'Password updated successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'An error occurred while updating password' });
//   }
// }
