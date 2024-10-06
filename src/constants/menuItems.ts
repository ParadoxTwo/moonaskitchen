import chickenBiriyani from '../assets/biryani.jpeg';
import chickenMBiriyani from '../assets/mbiriyani.jpeg';
import chickenCurry from '../assets/chickenCurry.jpeg';
import butterChicken from '../assets/butterChicken.jpeg';
import beefCurry from '../assets/beefCurry.jpeg';

export default Object.freeze({
  nonVeg: [
    {
      title: 'Chicken Biriyani (Hydrabadi)',
      price: '$25',
      description: 'Rice layered over marinated chicken with spices and herbs',
      src: chickenBiriyani,
    },
    {
      title: 'Chicken Biriyani (Muradabadi)',
      price: '$20',
      description: 'Rice cooked with a mix of chicken and aromatic spices',
      src: chickenMBiriyani,
    },
    {
      title: 'Beef Muradabadi Biriyani',
      price: '$22',
      description: 'Rice Cooked with a mix of Beef and aromatic spices',
      src: chickenMBiriyani,
    },
    {
      title: 'Kadai Chicken Curry',
      price: '$20',
      description: 'Flavourful chicken dipped in gravy',
      src: chickenCurry,
    },
    {
      title: 'Butter Chicken Curry',
      price: '$20',
      description: 'Chicken dipped in special tomato and butter based sauce',
      src: butterChicken,
    },
    {
      title: 'Beef Curry',
      price: '$22',
      description:
        'Cooked beef in gravy\n Optionally $2 more for bones (more flavourful)',
      src: beefCurry,
    },
  ],
});
