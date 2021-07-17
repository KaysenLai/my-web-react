import { ISkillCards } from '../types';
import codeIcon from '../assets/img/skill-code.png';
import designIcon from '../assets/img/skill-design.png';
import cameraIcon from '../assets/img/skill-camera.png';
import lightIcon from '../assets/img/skill-light.png';

const skillCards: ISkillCards = [
  {
    title: 'code',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque delectus, dolorem ' +
      'et minus nobis nostrum obcaecati officiis.',
    icon: codeIcon,
  },
  {
    title: 'design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque delectus, dolorem ' +
      'et minus nobis nostrum obcaecati officiis.',
    icon: designIcon,
  },
  {
    title: 'photography',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque delectus, dolorem ' +
      'et minus nobis nostrum obcaecati officiis.',
    icon: cameraIcon,
  },
  {
    title: 'learn',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque delectus, dolorem ' +
      'et minus nobis nostrum obcaecati officiis.',
    icon: lightIcon,
  },
];

export default skillCards;
