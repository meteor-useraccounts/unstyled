// Simply 'inherites' helpers from AccountsTemplates
Template.atReCaptcha.rendered = AccountsTemplates.atReCaptchaRendered;
Template.atReCaptcha.helpers(AccountsTemplates.atReCaptchaHelpers);