import kebabCase from 'lodash/kebabCase'
import { css } from 'styled-components'

export const MEDIA = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
  MINI: 'mini',
}

export const breakpoint = {
  [MEDIA.DESKTOP]: 1152,
  [MEDIA.TABLET]: 992,
  [MEDIA.MOBILE]: 768,
  [MEDIA.MINI]: 576,
}

const PIXEL_ATTRIBUTES = [
	'height',
	'width',
	'margin',
	'margin-inline',
	'margin-block',
	'margin-left',
	'margin-right',
	'margin-top',
	'margin-bottom',
	'padding',
	'padding-inline',
	'padding-block',
	'padding-left',
	'padding-right',
	'padding-top',
	'padding-bottom',
	'gap',
	'font-size',
	'border-radius'
]

/**
 *
 * values: {
 * 	[MEDIA.DESKTOP]: {
 * 		margin: 10px,
 * 		padding: 10px,
 * 		font-size: 10,
 * 	},
 * 	[MEDIA.TABLET]: {
 * 		margin: 8px,
 * 		padding: 8px,
 * 		font-size: 8,
 * 	}
 * }
 *
 */
export const usingMedia = (values = {}, mediaQueryStyle = 'max-width') => {
	const styles = Object.entries(values).reduce((result, [key, value]) => {
		return (result += `
			@media only screen and (${mediaQueryStyle}: ${breakpoint[key]}px) {
				${value}
			}
		`)
	}, '')
	return css([styles])
}

export const generatePropsStyle = (attributes, propsMapping = []) => {
	const styles = Object.entries(attributes).reduce((result, [key, value]) => {
		if (propsMapping.some((prop) => prop === key)) {
			const _key = key.replace('$', '')
			const attribute = kebabCase(_key)
			return (result += `
        ${attribute}: ${
					PIXEL_ATTRIBUTES.includes(attribute) ? `${value}px` : value
				};
		`)
		}
		return result
	}, '')
	return styles !== '' ? css([styles.trim()]) : null
}
